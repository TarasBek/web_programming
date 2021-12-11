import React from "react";
import SortOrderSelect from "../SortOrderSelect/SortOrderSelect";
import SortByParameterSelect from "../SortByParameterSelect/SortByParameterSelect";
import { SortWrapper, Wrapper } from "./FilterBar.styled";
import { ApplyButton } from "./FilterBar.styled";

const FilterBar = () => {
    return(
        <div>
            <Wrapper>
                <SortWrapper>
                <SortByParameterSelect />
                <SortOrderSelect />
                </SortWrapper>
                <ApplyButton>Apply</ApplyButton>
            </Wrapper>
        </div>
    )
}
export default FilterBar