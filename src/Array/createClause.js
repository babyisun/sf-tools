const CreateClause = (clause) => {
    let _clause;
    if (!clause)
        _clause = c => c;
    else if (typeof clause === "string")
        _clause = c => c[clause];
    else if (typeof clause === "function")
        _clause = clause;
    return _clause;
};

export default CreateClause;