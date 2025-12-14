import { Fragment, type ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}

const Providers = (props: ProvidersProps) => {
  const { children } = props

  return <Fragment>{children}</Fragment>
}

export default Providers
