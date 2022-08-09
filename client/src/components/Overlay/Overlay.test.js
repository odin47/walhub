import {render, screen, cleanup} from '@testing-library/react'
import Overlay from './Overlay'

afterEach(() => {
    cleanup()
})

describe('Overlay test suit', () => {
    test('should render Overlay component', () => {
        render(<Overlay />)
        const OverlayElement = screen.getByTestId("overlay-test")
        expect(OverlayElement).toBeInTheDocument()
    })
})