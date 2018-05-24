import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import moment from 'moment'
import getWeather from './../actions/weather-actions'
import Checkbox from './../components/Checkbox'
import Menu from './../components/Menu'
import SlideMenu from './../components/SlideMenu'
import Avatar from './../components/Avatar'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
      weather: {},
      user: this.props.navigation.state.params.user,
    }
  }
  componentDidMount = () => {
    // lat and long for Hanover
    getWeather(43.7005122, -72.2839756).then((response) => {
      this.setState({ weather: response })
    })
  }
  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible })
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.menuVisible ? <SlideMenu visible={this.state.menuVisible} toggleMenu={this.toggleMenu} navigation={this.props.navigation} /> : null }
        <View style={styles.headerContainer}>
          <Menu action={() => this.setState({ menuVisible: !this.state.menuVisible })} />
          <Text style={styles.header}>HOME</Text>
        </View>
        <View>
          <View style={styles.welcomeContainer}>
            <View style={styles.row}>
              <Text style={styles.welcomeText}>Hello, </Text><Text style={[styles.bold, { fontSize: 18 }]}>{this.state.user.name.toUpperCase()}!</Text>
            </View>
            <Text style={styles.welcomeText}>{moment().format('ddd, MMM D')}</Text>
            <Text style={styles.welcomeText}>{Math.round(this.state.weather.temp)} F</Text>
          </View>
          <View>
            <View style={styles.speechBubble}>
              <Text style={[styles.animalUpdate, { textAlign: 'right' }]}>I&#39;m thirsty</Text>
            </View>
            <Avatar/>
          </View>
          <View style={styles.checkItemsContainer}>
            <FlatList
              data={[
                { key: 'a', time: '8 AM', reminder: 'Apply sunscreen' },
                { key: 'b', time: '9 AM', reminder: 'Drink water' },
                { key: 'c', time: '11 AM', reminder: 'Take meds' },
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={styles.checkContainer}>
                    <Checkbox
                      time={item.time}
                      reminder={item.reminder}
                    />
                  </View>
                )
              }
            }
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5E7',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: '#7FD1FF',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'raleway-bold',
    marginTop: 20,
    marginLeft: 120,
  },
  welcomeContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 15,
    padding: 15,
  },
  animal: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  animalUpdate: {
    fontSize: 20,
    fontFamily: 'raleway-semi-bold',
  },
  speechBubble: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    height: 100,
    width: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  checkItemsContainer: {
    marginTop: 150,
    width: '100%',
    backgroundColor: 'transparent',
  },
  checkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
    backgroundColor: 'transparent',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'raleway-regular',
  },
  row: {
    flexDirection: 'row',
  },
  reminderText: {
    fontFamily: 'raleway-regular',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
})
