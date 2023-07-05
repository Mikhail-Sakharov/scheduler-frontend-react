import {Divider, List} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {getLists} from '../../store/app-data/selectors';
import {fetchListsAction} from '../../store/api-actions';
import {nanoid} from 'nanoid';
import ListsStackItem from '../lists-stack-item/lists-stack-item';

function ListsStack(): JSX.Element {
  const dispatch = useAppDispatch();

  const lists = useAppSelector(getLists);

  useEffect(() => {
    dispatch(fetchListsAction());
  }, [dispatch]);

  return (
    <List component="nav" aria-label="lists stack">
      {
        lists.map((list) => (
          <ListsStackItem key={nanoid()} list={list}/>
        ))
      }
      <Divider />
    </List>
  );
}

export default ListsStack;
