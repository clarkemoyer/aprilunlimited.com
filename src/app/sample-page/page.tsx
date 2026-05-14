export const metadata = {
  title: 'Sample Page',
}

const paragraphs = [
  'This is an example page.',
  'It’s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes).',
  'Most people start with an About page that introduces them to potential site visitors.',
  'It might say something like this:\nHi there! I’m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like piña coladas. (And gettin’ caught in the rain.)\n…or something like this:\nThe XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since.',
  'Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.',
  'As a new WordPress user, you should go to your dashboard to delete this page and create new pages for your content.',
  'Have fun!',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Sample Page</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}
