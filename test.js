import { expect } from 'chai'

// input (earth): forward, backward, left, right
// output (rover):
// - (rotate) North, South, East, West
// - forward, backward

// test list
// - when no command, rover stays in position
// - refactor: extract position from direction
// - when is 0,0 facing North, received forward, rover end in position 0,1 facing North

context('given rover is 0,0 facing North', () => {
    context('when the command list is empty', () => {
        it('should end 0,0 facing North', () => {
            // given
            const rover = new Rover({ x: 0, y: 0, direction: 'NORTH' })

            // when
            rover.command([])

            // then
            expect(rover.getPosition()).to.deep.equal({
                x: 0,
                y: 0,
                direction: 'NORTH',
            })
        })
    })
})

class Rover {
    constructor({ x, y, direction }) {
        this.x = x
        this.y = y
        this.direction = direction
    }
    command() {}
    getPosition() {
        return { x: 0, y: 0, direction: 'NORTH' }
    }
}
