import React from 'react';
import ReactDOM from 'react-dom';
import Key from './App';
import Modal from './Modal';
import InfiniteScroll from './App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
// import toJson from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Key />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Existencia de componentes', () => {
  it('Debería existir el componente <Modal />', () => {
    const wrapper = shallow(<Modal/>);
    expect(wrapper.exists()).toBe(true);
  });

 
  it('Debería existir el componente <Key />', () => {
    const wrapper = shallow(<Key/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('Debería existir el componente <InfiniteScroll />', () => {
    const wrapper = shallow(<InfiniteScroll/>);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('Componentes existentes en app.js', () => {

  it('Deberia encontrar al componente Modal dentro del componente Key una vez', () => {
      const nameComponent = shallow(<Key/>);
      expect(nameComponent.find('Modal').length).toBe(1);
    });

  it('Deberia encontrar al componente InfiniteScroll dentro del componente Key una vez', () => {
    const nameComponent = shallow(<InfiniteScroll/>);
    expect(nameComponent.find('Modal').length).toBe(1);
  });

});

describe('Encontrar etiquetas dentro del componente Modal', () => {

  it('Debería encontrar la etiqueta img dentro de <Modal/>', () => {
    const img = shallow(<Modal/>);
    expect(img.find('img').length).toEqual(1);
  });

  it('Debería encontrar la etiqueta button dentro de <Modal/>', () => {
    const button = shallow(<Modal/>);
    expect(button.find('button').length).toEqual(3);
  });

  it('Debería encontrar la etiqueta nav dentro de <Modal/>', () => {
    const nav = shallow(<Modal/>);
    expect(nav.find('nav').length).toEqual(1);
  });

})

describe('Encontrar etiquetas dentro del componente Key', () => {

  it('Debería encontrar la etiqueta button dentro de <Key/>', () => {
    const button = shallow(<Key/>);
    expect(button.find('button').length).toEqual(3);
  });

  it('Debería encontrar la etiqueta nav dentro de <Key/>', () => {
    const nav = shallow(<Key/>);
    expect(nav.find('nav').length).toEqual(1);
  });

  it('Debería encontrar la etiqueta input dentro de <Key/>', () => {
    const input = shallow(<Key/>);
    expect(input.find('input').length).toEqual(1);
  });

})
// it('se renderea correctamente el componente Modal', () => {  
//   const component = shallow(<Modal />);
//   expect(toJson(component)).toMatchSnapshot();
// });