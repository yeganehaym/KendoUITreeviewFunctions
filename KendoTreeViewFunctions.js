    var treeview;

    function FindTreeViewObj(objName) {
        treeview = $(objName).data("kendoTreeView");
    }

    function GetSelectedNode() {
        return treeview.select();
    }

    function DisableSelectedNode() {
        treeview.enable(GetSelectedNode(), false);
    }

    function EnableSelectedNode() {
        treeview.enable(GetSelectedNode(), true);
    }

    function EnableAllNodes() {
        treeview.enable(".k-item");
    }

    function ExpandAllNodes() {
        treeview.expand(".k-item");
    }

    function CollapseAllNodes() {
        treeview.collapse(".k-item");
    }

    function RemoveSelectedNode() {
        treeview.remove(GetSelectedNode());
    }

    function FilterTreeView(filterText) {
        if (filterText !== "") {
            treeview.dataSource.filter({
                field: "text",
                operator: "contains",
                value: filterText
            });
        } else {
            treeview.dataSource.filter({});
        }
    }

    function SortTreeView(sortType) {
        treeview.dataSource.sort({
            field: "text",
            dir: sortType
        });
    }

    function GetSelectedDataItem() {
        return treeview.dataItem(GetSelectedNode());
    }

    function GetSelectedNodeId() {
        var data = GetSelectedDataItem();
        return data.id;
    }

    function GetSelectedNodeText() {
        var data = GetSelectedDataItem();
        return data.Name;
    }
    function SetSelectedNodeText(value) {
        var node = GetSelectedNode();
        treeview.text(node, value);
    }


    function GetNodeByText(text) {
        return treeview.findByText(text);
    }

    function GetNodeByText(id) {
        return treeview.findByUid(id);
    }

    function InsertAfter(item, nextItem) {
        treeview.insertAfter({ text: "item" }, GetNodeByText(nextItem));
    }

    function MoveToAfter(firstItem, secondItem) {
        treeview.insertAfter(GetNodeByText(firstItem), GetNodeByText(secondItem));
    }

    function InsertBefore(item, nextItem) {
        treeview.insertBefore({ text: "item" }, GetNodeByText(nextItem));
    }

    function MoveToBefore(firstItem, secondItem) {
        treeview.insertBefore(GetNodeByText(firstItem), GetNodeByText(secondItem));
    }

    function GetParent(node) {
        return treeview.parent(node);
    }

    function Toggle(node) {
        treeview.toggle(node);
    }

    function NewNode(nodeText, nodeValue, selectedNode) {
        treeview.append({
            Name: nodeText,
            Id: nodeValue
        }, selectedNode);
    }

