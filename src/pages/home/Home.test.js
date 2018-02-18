import React from 'react'
import { mount } from 'enzyme'
import Home from './Home'

describe('pages/home', () => {
    it('renders without crashing', () => {
        const home = mount(<Home />)
        expect(home.find('div').length).toEqual(1)
    })
})
