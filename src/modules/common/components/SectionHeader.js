import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = (props) => {
  const { categories, selectedCat } = props;
  let sub;
  if(categories){
    sub = categories.find(cat => cat.childrens.find(child => child._id === selectedCat._id));
 }

  const renderCat = ( cat) => {
    if(cat){
      return (
        <>
            <i className="icon-chevron"> </i>
            <Link to={`/knowledge-base/category/details/${cat._id}`}>
              <div className="item">{cat.title}</div>
            </Link>
          </>
      )
    }
    
  }
  return (
    <div className="section-header">
      <Link to={`/knowledge-base`}>
        <div className="item">Бүх ангилал</div>
        {renderCat(sub)}
        {renderCat(selectedCat)||"" }
      </Link>
      
    </div>
  );
};

export default SectionHeader;
