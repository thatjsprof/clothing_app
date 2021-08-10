import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'

const Spinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    console.log(isLoading)
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}></WrappedComponent>
    )
}

export default Spinner