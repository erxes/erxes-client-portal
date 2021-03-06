import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = (props) => {
  const { categories, selectedCat } = props;
  let subCats;
  if(categories && categories.length > 0){
    subCats = categories.find(cat => cat.childrens.find(child => child._id === selectedCat._id));
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
        <div className="item all">All categories</div>
        {renderCat(subCats)}
        {renderCat(selectedCat)||"" }
      </Link>
      
    </div>
  );
};

export default SectionHeader;