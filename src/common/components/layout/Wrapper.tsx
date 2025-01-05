import React, { Fragment, PropsWithChildren } from 'react'
import { useFontLoader } from 'src/common/hooks/useFontLoader'

import 'src/common/scss/normalize.css'
import 'src/common/scss/base.scss'

export const Wrapper = (props: PropsWithChildren) => {
    useFontLoader('Ubuntu')

    return <Fragment>{props.children}</Fragment>
}
