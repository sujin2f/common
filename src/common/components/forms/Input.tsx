import React, {
    ChangeEventHandler,
    Fragment,
    KeyboardEvent,
    RefObject,
    useCallback,
    useRef,
} from 'react'
import { filterEmpty } from 'src/common/utils/object'
import { generateUUID } from 'src/common/utils/string'
import { className as getClassName } from 'src/common/utils/string'

type Props = {
    label?: string
    id?: string
    type?:
        | 'text'
        | 'number'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'email'
        | 'file'
        | 'password'
        | 'radio'
        | 'range'
        | 'tel'
        | 'time'
        | 'url'
    defaultValue?: string | number
    reference?: RefObject<HTMLInputElement>
    helpText?: string
    required?: boolean
    errorMessage?: string
    inlineLabel?: string
    list?: string
    onEnterKeyDown?: () => void
    onChange?: ChangeEventHandler<HTMLInputElement>
    autoFocus?: boolean
    value?: string | number
    placeholder?: string
    name?: string
}

/*
 * Input Component in Foundation Site
 * @ref https://get.foundation/sites/docs/forms.html#text-inputs
 */
export const Input = (props: Props): JSX.Element => {
    const {
        label,
        defaultValue,
        reference: refProp,
        helpText,
        required,
        errorMessage,
        inlineLabel,
        list,
        autoFocus,
        value,
        onEnterKeyDown,
        onChange,
        placeholder,
        name,
    } = props

    const refComp = useRef<HTMLInputElement>(null)
    const ref = refProp || refComp

    const id = props.id || generateUUID()
    const type = props.type || 'text'
    const ariaDescribedby = helpText ? `${id}-help-text` : ''
    const labelClassNames = getClassName(
        'form-label',
        required && 'form-label--required',
    )
    const className = getClassName(
        inlineLabel && 'input-group-field',
        errorMessage && 'input--error',
    )
    const inputProps = filterEmpty({
        id,
        type,
        defaultValue,
        ref,
        'aria-describedby': ariaDescribedby,
        required,
        className,
        list,
        autoFocus,
        value,
        placeholder,
        name,
    })

    const onKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && onEnterKeyDown) {
                onEnterKeyDown()
            }
        },
        [onEnterKeyDown],
    )

    const inputComponent = (
        <Fragment>
            <input {...inputProps} onKeyDown={onKeyDown} onChange={onChange} />
            {helpText && (
                <p className="help-text" id={ariaDescribedby}>
                    {helpText}
                </p>
            )}
        </Fragment>
    )
    const labelComponent = (
        <Fragment>
            {label && (
                <label
                    htmlFor={id}
                    className={labelClassNames}
                    onClick={() => {
                        ref.current?.focus()
                    }}
                >
                    <span className="form-label__text">{label}</span>
                    {errorMessage && (
                        <span className="form-label__error">
                            {errorMessage}
                        </span>
                    )}
                </label>
            )}
        </Fragment>
    )

    if (inlineLabel) {
        return (
            <Fragment>
                {labelComponent}
                <div
                    className="input-group"
                    onClick={() => {
                        ref.current?.focus()
                    }}
                >
                    <span className="input-group-label">{inlineLabel}</span>
                    {inputComponent}
                </div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            {labelComponent}
            {inputComponent}
        </Fragment>
    )
}
