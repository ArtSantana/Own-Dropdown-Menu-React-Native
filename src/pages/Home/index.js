import React, {useState} from 'react';
import {TouchableWithoutFeedback, Platform} from 'react-native';
import {
  Page,
  Container,
  Selected,
  SelectedText,
  SelectedLeft,
  IconMap,
  Item,
  ItemText,
  styles,
} from './styles';
import Animated from 'react-native-reanimated';
import {mix, useTransition} from 'react-native-redash';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home() {
  const menuItems = [
    {title: 'foo', id: 1},
    {title: 'bar', id: 2},
    {title: 'foo bar', id: 3},
    {title: 'bar foo', id: 4},
  ];
  const [selected, setSelected] = useState(menuItems[0]);
  const [open, setOpen] = useState(false);
  const transition = useTransition(open);
  const rotateZ = mix(transition, 0, Math.PI / 2);
  const height = mix(
    transition,
    0,
    (Platform.OS === 'ios' ? hp(5.5) : hp(6)) * menuItems.length,
  );

  function selectLocation(menuItem) {
    setSelected(menuItem);
    setOpen(!open);
  }

  function onPressOpen() {
    setOpen(!open);
  }

  return (
    <Page>
      <TouchableWithoutFeedback onPress={onPressOpen}>
        <Container>
          <Selected>
            <SelectedLeft>
              <IconMap>
                <Icons
                  color="#FFF"
                  name="map-marker"
                  size={Platform.OS === 'ios' ? hp(3.5) : hp(4)}
                />
              </IconMap>
              <SelectedText>{selected.title}</SelectedText>
            </SelectedLeft>
            <Animated.View style={{transform: [{rotateZ}]}}>
              <MaterialIcons
                color="#faae02"
                name="keyboard-arrow-right"
                size={Platform.OS === 'ios' ? hp(3.5) : hp(4)}
              />
            </Animated.View>
          </Selected>
        </Container>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.listItems, {height}]}>
        {menuItems.map((item, key) =>
          item.id !== selected.id ? (
            <Item
              key={item.id}
              isLast={key === menuItems.length - 1}
              onPress={() => {
                selectLocation(item);
              }}>
              <ItemText>{item.title}</ItemText>
            </Item>
          ) : null,
        )}
      </Animated.View>
    </Page>
  );
}
