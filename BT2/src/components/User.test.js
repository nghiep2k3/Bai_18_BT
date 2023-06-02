import React from 'react';
import { render } from '@testing-library/react';
import UserDetails from './User';

const userInfo = {
    userName: 'nghiep1320',
    email: 'nghiepnguyen149@gmail.com',
    phone: '0378936624',
};

test('Test khi dung username', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const usernameElement = getByText(`Username: ${userInfo.userName}`);
    expect(usernameElement).toBeInTheDocument();
});

test('Test khi dung email', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const emailElement = getByText(`Email: ${userInfo.email}`);
    expect(emailElement).toBeInTheDocument();
});

test('Test khi dung sdt', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const phoneElement = getByText(`Phone: ${userInfo.phone}`);
    expect(phoneElement).toBeInTheDocument();
});