import React, { Fragment, PropsWithChildren, useEffect } from 'react'
import { LoadingStatus } from 'src/common/constants/asset'
import { useFontLoader } from 'src/common/hooks/useFontLoader'
import { useStyleLoader } from 'src/common/hooks/useStyleLoader'

export const Wrapper = (props: PropsWithChildren<{}>): JSX.Element => {
    useFontLoader('Ubuntu')

    const cdn = [
        useStyleLoader(
            'https://cdn.jsdelivr.net/npm/foundation-sites@6.9.0/dist/css/foundation-float.min.css',
        ),
        useStyleLoader(
            'https://cdn.jsdelivr.net/npm/foundation-sites@6.9.0/dist/css/foundation-prototype.min.css',
        ),
    ]

    // Offline Support
    const onError =
        cdn[0] === LoadingStatus.ERROR || cdn[1] === LoadingStatus.ERROR
    const onDone =
        cdn[0] === LoadingStatus.DONE || cdn[1] === LoadingStatus.DONE

    useEffect(() => {
        if (onError) {
            require('foundation-sites/dist/css/foundation.min.css')
            require('src/assets/styles/wrapper.scss')
        }
    }, [onError])
    useEffect(() => {
        if (onDone) {
            require('src/assets/styles/wrapper.scss')
            require('src/assets/styles/wrapper.scss')
        }
    }, [onDone])

    return <Fragment>{props.children}</Fragment>
}
