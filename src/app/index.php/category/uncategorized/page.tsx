export const metadata = {
  title: 'Uncategorized',
}

const paragraphs = ['Posts filed under Uncategorized.', 'Hello world!']

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Uncategorized</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}
