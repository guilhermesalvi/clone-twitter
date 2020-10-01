import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Guilherme Salvi</h1>
        <h2>@guilhermesalvi</h2>

        <p>
          Developer at <a href="https://google.com">@Superdigital</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de janeiro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
