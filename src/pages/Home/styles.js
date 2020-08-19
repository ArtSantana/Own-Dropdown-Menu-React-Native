import styled from 'styled-components';
import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  listItems: {
    overflow: 'hidden',
    zIndex: -1,
    width: '95%',
    marginTop: hp(-0.5),
  },
});

const Page = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: #f1f1f1;
`;

const Container = styled.View`
  width: 95%;
`;

const Selected = styled.View`
  background-color: #fff;
  flex-direction: row;
  margin-top: ${hp(2)}px;
  padding-right: ${wp(1)}px;
  border-radius: ${hp(0.6)}px;
  border-width: 0.5px;
  border-color: #d1d1d6;
  align-items: center;
  justify-content: space-between;
`;
const SelectedLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SelectedText = styled.Text`
  color: #343434;
  font-size: ${Platform.OS === 'ios' ? hp(2.5) : hp(3)}px;
  font-weight: bold;
`;

const IconMap = styled.View`
  background-color: #faae02;
  margin-right: ${wp(2)}px;
  padding-vertical: ${hp(0.75)}px;
  padding-horizontal: ${wp(1.5)}px;
  border-top-left-radius: ${hp(0.6)}px;
  border-bottom-left-radius: ${hp(0.6)}px;
`;

const Item = styled.TouchableOpacity`
  background-color: #fff;
  height: ${Platform.OS === 'ios' ? hp(5.5) : hp(6)}px;
  border-bottom-width: 0.5px;
  border-left-width: 0.5px;
  border-right-width: 0.5px;
  border-color: #d1d1d6;
  padding-left: ${wp(5)}px;
  padding-vertical: ${hp(1.5)}px;
  border-bottom-left-radius: ${(props) => (props.isLast ? hp(0.6) : 0)}px;
  border-bottom-right-radius: ${(props) => (props.isLast ? hp(0.6) : 0)}px;
`;

const ItemText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? hp(1.7) : hp(2.1)}px;
  color: #343434;
`;

export {
  Page,
  Container,
  Selected,
  SelectedText,
  SelectedLeft,
  IconMap,
  Item,
  ItemText,
  styles,
};
