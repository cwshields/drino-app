import React, { Component } from 'react';
import '../../../assets/scss/users.scss';
import ProfileCard from '../../Profiles/ProfileCard';
import SelectAllWithFilterTable from './select-filter-table';

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="dash-body">
        <div className="dash-section">
          <div className="messages-component-wrap">
            <ProfileCard />
            <div className='col-12'>
              <div className='panel panel-default'>
                <SelectAllWithFilterTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}