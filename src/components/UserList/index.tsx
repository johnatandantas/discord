import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }: UserRowProps) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Johnatan Dantas" />

      <Role>Offline - 5</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
      <UserRow nickname="Diego Fernandes" />
    </Container>
  );
};

export default UserList;
