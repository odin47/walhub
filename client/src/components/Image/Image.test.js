import {render, screen, cleanup} from '@testing-library/react'
import Image from './Image'

afterEach(() => {
    cleanup()
})

describe('Image test suit', () => {
    test('should render Image component', () => {
        render(<Image />)
        const ImageElement = screen.getByTestId("image-test")
        expect(ImageElement).toBeInTheDocument()
    })

    test('should render Image component with content', () => {
        const data = 'https://avatars.githubusercontent.com/u/16748505?v=4';
        render(<Image data={data}/>)
        const ImageElement = screen.getByTestId("image-test")
        expect(ImageElement).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/16748505?v=4')
    })
})