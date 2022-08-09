import {render, screen, cleanup} from '@testing-library/react'
import Spinner from './Spinner'

afterEach(() => {
    cleanup()
})

describe('Spinner test suit', () => {
    test('should render Spinner component', () => {
        render(<Spinner />)
        const SpinnerElement = screen.getByTestId("spinner-test")
        expect(SpinnerElement).toBeInTheDocument()
    })
})