import React, { Component } from 'react'
import Calendar from 'react-calendar';
export default class CustomCalendar extends Component {
  render() {
    return (
      <div style={{borderBottom: "1px solid rgba(34, 34, 34,0.2)"}}>
        <Calendar locale="us"/>
      </div>
    )
  }
}
