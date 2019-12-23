type PreeventAnchorHandler = (
  wrapped: () => void
) => (event: React.MouseEvent<HTMLAnchorElement>) => void

export const anchorHandler: PreeventAnchorHandler = wrapped => {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    wrapped()
  }
}
