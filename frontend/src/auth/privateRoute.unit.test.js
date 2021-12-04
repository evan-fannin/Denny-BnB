import React from "react";
import { Route, Redirect, MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import PrivateRoute from "./privateRoute";

it('renders the protected component when the user is authenticated', () => {
    const protectedComponent = () => <div>Protected</div>;
    const props = { path: '/private-path', component: protectedComponent };
    localStorage.setItem('access_token', 123);

    const wrapper = mount(
        <MemoryRouter initialEntries={[props.path]}>
            <PrivateRoute {...props} />
        </MemoryRouter>
    );

    expect(wrapper.exists(protectedComponent)).toBe(true);
    wrapper.unmount();
    localStorage.removeItem('access_token');
});

it('redirects to login when the user is not authenticated', () => {
    const protectedComponent = () => <div>Protected</div>;
    const props = { path: '/private-path', component: protectedComponent };

    const wrapper = mount(
        <MemoryRouter initialEntries={[props.path]}>
            <PrivateRoute {...props} />
        </MemoryRouter>
    );

    expect(wrapper.exists(protectedComponent)).toBe(false);
    const history = wrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe('/login');
    wrapper.unmount();
});



