package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.gui.ContentContainer
import ch.loewenfels.depgraph.gui.actions.Publisher
import ch.loewenfels.depgraph.gui.actions.Releaser
import ch.loewenfels.depgraph.gui.getTextField
import ch.loewenfels.depgraph.gui.serialization.ModifiableState
import kotlin.js.Promise

class ProcessStarter(
    private val publisher: Publisher,
    private val jenkinsJobExecutor: JenkinsJobExecutor,
    private val simulatingJobExecutor: SimulatingJobExecutor,
    releaserSupplier: (ProcessStarter) -> Releaser
) {
    private val releaser by lazy { releaserSupplier(this) }

    /**
     * Applies changes and publishes the new release.json with the help of the [publisher] which in turn uses the
     * predefined [jenkinsJobExecutor] to carry out this job.
     * @return `true` if publishing was carried out, `false` in case there were not any changes.
     */
    fun publishChanges(verbose: Boolean): Promise<Boolean> = publishChanges(jenkinsJobExecutor, verbose)

    /**
     * Applies changes and publishes the new release.json with the help of the [publisher] which in turn uses the given
     * [jobExecutor] to carry out this job.
     * @return `true` if publishing was carried out, `false` in case there were not any changes.
     */
    fun publishChanges(jobExecutor: JobExecutor, verbose: Boolean): Promise<Boolean> {
        val changed = publisher.applyChanges()
        return if (changed) {
            val publishId = getTextField(ContentContainer.RELEASE_ID_HTML_ID).value
            val newFileName = "release-$publishId"
            publisher.publish(newFileName, verbose, jobExecutor)
                .then { true }
        } else {
            Promise.resolve(false)
        }
    }

    fun dryRun(modifiableState: ModifiableState): Promise<Boolean>
        = releaser.release(jenkinsJobExecutor, modifiableState.dryRunExecutionDataFactory)

    fun release(modifiableState: ModifiableState): Promise<Boolean>
        = releaser.release(jenkinsJobExecutor, modifiableState.releaseJobExecutionDataFactory)

    fun explore(modifiableState: ModifiableState): Promise<Boolean>
        = releaser.release(simulatingJobExecutor, modifiableState.releaseJobExecutionDataFactory)
}
