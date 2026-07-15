interface Props {
    id: string
    title: string
    children: React.ReactNode
  }
  
  export default function Section({ id, title, children }: Props) {
    return (
      <section id={id} className="py-12 scroll-mt-16">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        {children}
      </section>
    )
  }