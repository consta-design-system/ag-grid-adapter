import './HeaderCell.css';

import { IconArrowLeft } from '@consta/uikit/IconArrowLeft';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import { IconDown } from '@consta/uikit/IconDown';
import { IconHamburger } from '@consta/uikit/IconHamburger';
import { IconTop } from '@consta/uikit/IconTop';
import { Text, TextProps } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import { IHeaderGroupParams, IHeaderParams } from 'ag-grid-community';
import React, { useEffect, useRef, useState } from 'react';

import { cn } from '##/utils/bem';

type Props = IHeaderParams &
  IHeaderGroupParams &
  Omit<TextProps, 'size' | 'lineHeight'> & {
    size?: 's' | 'm';
  };

type SortType = null | 'asc' | 'desc';

const cnHeaderCell = cn('HeaderCell');

const textSizeMap = {
  m: 's',
  s: 'xs',
} as const;

export const HeaderCell = (props: Props) => {
  const {
    size = 'm',
    column,
    showColumnMenu,
    enableSorting,
    enableMenu,
    setSort,
    setExpanded,
    align = 'left',
    columnGroup,
    displayName,
    weight = 'semibold',
    view = 'secondary',
    ...otherProps
  } = props;

  const [sortType, setSortType] = useState<SortType>(null);
  const [isExpanded, setIsExpanded] = useFlag(false);

  const menuRef = useRef<HTMLButtonElement>(null);

  const isExpandable = columnGroup?.getProvidedColumnGroup().isExpandable();

  const onMenuClick = () => {
    menuRef.current && showColumnMenu(menuRef.current);
  };

  const changeExpand = () => {
    setExpanded?.(!columnGroup?.getProvidedColumnGroup().isExpanded());
  };

  const syncExpandButtons = () => {
    setIsExpanded[
      columnGroup?.getProvidedColumnGroup().isExpanded() ? 'on' : 'off'
    ]();
  };

  const onSortChanged = () => {
    if (column) {
      if (column.isSortDescending()) {
        setSortType('desc');
      } else if (column.isSortAscending()) {
        setSortType('asc');
      } else {
        setSortType(null);
      }
    }
  };

  const onSortRequested = (
    order: SortType,
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => {
    setSort(order, event.shiftKey);
  };

  useEffect(() => {
    column?.addEventListener('sortChanged', onSortChanged);
    onSortChanged();
    columnGroup
      ?.getProvidedColumnGroup()
      .addEventListener('expandedChanged', syncExpandButtons);
    syncExpandButtons();
    return () => {
      column?.removeEventListener('sortChanged', onSortChanged);
    };
  }, []);

  const renderSorting = () => {
    if (sortType === 'asc') {
      return (
        <button
          type="button"
          className={cnHeaderCell('SortButton')}
          onClick={(e) => onSortRequested('desc', e)}
          onTouchEnd={(e) => onSortRequested('desc', e)}
        >
          <IconTop view="secondary" size="xs" />
        </button>
      );
    }
    if (sortType === 'desc') {
      return (
        <button
          type="button"
          className={cnHeaderCell('SortButton')}
          onClick={(e) => onSortRequested(null, e)}
          onTouchEnd={(e) => onSortRequested(null, e)}
        >
          <IconDown view="secondary" size="xs" />
        </button>
      );
    }
    return (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      <button
        type="button"
        className={cnHeaderCell('SortButton')}
        onClick={(e) => onSortRequested('asc', e)}
        onTouchEnd={(e) => onSortRequested('asc', e)}
      />
    );
  };

  return (
    <div className={cnHeaderCell({ size, align })}>
      <div className={cnHeaderCell('Container')}>
        <Text
          {...otherProps}
          weight={weight}
          view={view}
          size={textSizeMap[size]}
          lineHeight="s"
        >
          {displayName}
        </Text>
        {enableSorting && renderSorting()}
        {isExpandable && (
          <button
            type="button"
            onClick={changeExpand}
            className={cnHeaderCell('GroupButton')}
          >
            {isExpanded ? (
              <IconArrowLeft view="secondary" size="xs" />
            ) : (
              <IconArrowRight view="secondary" size="xs" />
            )}
          </button>
        )}
      </div>
      {enableMenu && (
        <button
          className={cnHeaderCell('Menu')}
          ref={menuRef}
          onClick={onMenuClick}
          type="button"
        >
          <IconHamburger view="secondary" size="xs" />
        </button>
      )}
    </div>
  );
};
