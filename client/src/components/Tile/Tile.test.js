import {render, screen, cleanup} from '@testing-library/react'
import Tile from './Tile'

afterEach(() => {
    cleanup()
})

describe('Tile test suit', () => {
    test('should render Tile component', () => {
        render(<Tile />)
        const TileElement = screen.getByTestId("tile-test")
        expect(TileElement).toBeInTheDocument()
    })

    test('should render Tile component with content', () => {
        render(<Tile fullname='netdata/netdata'/>)
        const TileElement = screen.getByTestId("tile-test")
        expect(TileElement).toHaveTextContent('netdata/netdata')
    })
})