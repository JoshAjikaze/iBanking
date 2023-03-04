import React, { useRef, useEffect } from "react";

export const Checkbox = React.forwardRef(({
    //@ts-ignore
    indeterminate,
    ...rest
}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        //@ts-ignore
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <>
            {
                //@ts-ignore
                <input type='checkbox' ref={resolvedRef} {...rest} />
            }
        </>
    )
})