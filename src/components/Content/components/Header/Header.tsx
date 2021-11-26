type Props = {
  title: string;
}
export function Header({ title }: Props) {
  return (
    <header>
      <span className="category">Categoria:<span> { title }</span></span>
    </header>
  )
}