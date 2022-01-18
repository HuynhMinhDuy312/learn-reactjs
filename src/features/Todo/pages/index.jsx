import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../../components/NotFound';
import DetailPage from './DetailPage';
import ListPage from './ListPage';

TodoFeture.propTypes = {

};

function TodoFeture(props) {
    const match = useRouteMatch();

    return (
        <div>
            TODO SHARED UI
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeture;