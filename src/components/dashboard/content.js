import React from 'react';
import { DashboardStore } from 'stores';
import { observer } from 'mobx-react';

@observer
export default class DashboardContent extends React.Component {
    render() {
        return (
            <div className={`wrapper dashboard-wrapper`}>
                <div className={`component-title`}>{DashboardStore.title}</div>
            </div>
        )
    }
}