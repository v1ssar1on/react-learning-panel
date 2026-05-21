import { AutoInstallWidget } from '@/modules/getting-started/installation/widgets/auto-install.widget'
import { ManualInstallWidget } from '@/modules/getting-started/installation/widgets/manual-install.widget'
import { SystemRequirementsWidget } from '@/modules/getting-started/installation/widgets/system-requirements.widget'
import { PageHeader } from '@/shared/components/page-header'

export default function InstallationPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader
        title="Installation"
        description="Learn how to install and set up Next.js in your project."
      />
      <SystemRequirementsWidget />
      <AutoInstallWidget />
      <ManualInstallWidget />
    </div>
  )
}
