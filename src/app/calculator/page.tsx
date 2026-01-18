import { ComingSoon } from '@/components/shared'

export default function CalculatorPage() {
  return (
    <ComingSoon
      title="Calculator"
      description="Tax calculators for income tax, GST, TDS, and more. Accurate tools to help you plan better. Coming soon."
      icon={
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      }
    />
  )
}
