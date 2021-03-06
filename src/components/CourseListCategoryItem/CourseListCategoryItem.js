import React from 'react';
import {Link} from 'react-router';

const CourseListCategoryItem = ({category, isActiveCategory}) => {
  const liProps = isActiveCategory ? { className: 'active' } : {};
  return (
    <li {...liProps}><Link to={`/courses/${category.get('slug')}`}><span>{category.get('category')}</span></Link></li>
  );
};
export default CourseListCategoryItem;
