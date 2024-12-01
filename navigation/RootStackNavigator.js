
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screenviews/HomeScreenView';
import AboutScreen from '../screenviews/AboutScreenView';
import RestaurantListScreen from '../screenviews/RestaurantListScreenView';
import RestaurantViewScreen from '../screenviews/RestaurantViewScreenView';
import RestaurantAddScreen from '../screenviews/RestaurantAddView'
import RestaurantEditScreen from '../screenviews/RestaurantEditView'
import RestaurantGoogleViewScreen from '../screenviews/RestaurantGoogleView'

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
      Home:{
      screen: HomeScreen,
      options:{
        title: 'Personal Restaurant Guide',
      }
    },
    About: AboutScreen,
    RestaurantList: RestaurantListScreen,
    RestaurantView: RestaurantViewScreen,
    RestaurantAdd: RestaurantAddScreen,
    RestaurantEdit: RestaurantEditScreen,
    RestaurantGoogle: RestaurantGoogleViewScreen,

  },
  })

export default RootStack;

