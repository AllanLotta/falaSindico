import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {
  Container,
  Card,
  Content,
  Title,
  TitleText,
  ItemList,
  Item,
  ItemHeader,
  ItemTitle,
  ItemDate,
  ItemDescription,
} from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <Content>
          <Card>
            <ScrollView>
              <ItemList>
                <Title>
                  <Text>Logo</Text>
                  <TitleText>CELEBRIT</TitleText>
                  <Text />
                </Title>
                <Item>
                  <ItemHeader>
                    <ItemTitle>Portão 09</ItemTitle>
                    <ItemDate>27/05/2019</ItemDate>
                  </ItemHeader>
                  <ItemDescription>
                    Informamos que o portão 09 já está funcionando normalmente!
                  </ItemDescription>
                </Item>
                <Item>
                  <ItemHeader>
                    <ItemTitle>Ação</ItemTitle>
                    <ItemDate>27/04/2019</ItemDate>
                  </ItemHeader>
                  <ItemDescription>
                    A coleta seletiva começa em casa! Separe o lixo seco do
                    úmido em recipientes diferentes.
                  </ItemDescription>
                </Item>
                <Item>
                  <ItemHeader>
                    <ItemTitle>Concientização</ItemTitle>
                    <ItemDate>04/02/2019</ItemDate>
                  </ItemHeader>
                  <ItemDescription>
                    Não precisa lavar o que vai para o lixo seco (plástico,
                    vidro, metal e papel), mas precisa retirar restos de
                    alimentos antes de descartar!
                  </ItemDescription>
                </Item>
                <Item>
                  <ItemHeader>
                    <ItemTitle>Concientização</ItemTitle>
                    <ItemDate>04/02/2019</ItemDate>
                  </ItemHeader>
                  <ItemDescription>
                    Não precisa lavar o que vai para o lixo seco (plástico,
                    vidro, metal e papel), mas precisa retirar restos de
                    alimentos antes de descartar!
                  </ItemDescription>
                </Item>
                <Item>
                  <ItemHeader>
                    <ItemTitle>Concientização</ItemTitle>
                    <ItemDate>04/02/2019</ItemDate>
                  </ItemHeader>
                  <ItemDescription>
                    Não precisa lavar o que vai para o lixo seco (plástico,
                    vidro, metal e papel), mas precisa retirar restos de
                    alimentos antes de descartar!
                  </ItemDescription>
                </Item>
                <Item>
                  <ItemHeader>
                    <ItemTitle>Outros</ItemTitle>
                    <ItemDate>04/02/2019</ItemDate>
                  </ItemHeader>
                  <ItemDescription>
                    Não precisa lavar o que vai para o lixo seco (plástico,
                    vidro, metal e papel), mas precisa retirar restos de
                    alimentos antes de descartar!
                  </ItemDescription>
                </Item>
              </ItemList>
            </ScrollView>
          </Card>
        </Content>
      </Container>
    </>
  );
}
