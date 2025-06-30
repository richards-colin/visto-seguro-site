// components/SectionTitle.tsx
export default function SectionTitle({
  headingParts,
  subtitle,
}: {
  headingParts: [string, string]
  subtitle?: string
}) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-bold">
        <span className="text-blue-900">{headingParts[0]}</span>{' '}
        <span className="text-green-700">{headingParts[1]}</span>
      </h2>
              <div className="w-16 h-1 mx-auto bg-blue-900 rounded mb-12"></div>

      {subtitle && (
        <p className="text-md md:text-lg text-gray-700 mt-2 whitespace-pre-line">
          {subtitle}
        </p>
      )}
    </div>
  )
}
