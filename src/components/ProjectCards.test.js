import React from 'react';
import { mount } from 'enzyme';
import ProjectCards from './ProjectCards';

describe('As a user i want to see my many converted', () => {
    const props={
        projects:[ {
            name: 'test',
            languege: 'stranger thing',
            stargazers_count: 5
        }]
    }
   
const wrapper = mount(<ProjectCards {...props}/>);
    it('Check if the component is mounted', () => {
        expect(wrapper).toMatchSnapshot();
    });
})