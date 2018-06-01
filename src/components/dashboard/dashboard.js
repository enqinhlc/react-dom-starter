import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('DashboardStore')
@observer
export default class DashboardContent extends React.Component {
    render() {
        const { DashboardStore } = this.props;
        return (
            <div className={`wrapper dashboard-wrapper`}>
                <div className={`component-title`}>{DashboardStore.title}</div>
            </div>
        )
    }
}