import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string'
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];
        //toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[idx] = newTodo;
        //update todoList
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        //setFilteredStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowCompleteClick = () => {
        //setFilteredStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowNewClick = () => {
        //setFilteredStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus])

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompleteClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;