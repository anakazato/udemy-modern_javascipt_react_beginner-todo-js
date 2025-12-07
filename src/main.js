import './style.css';

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");
    
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // button(完了) 生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        alert("完了");
    });

    // button(削除) 生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        // closest = 「一番近い」　この要素とその親に（文書ルートに向かって）、指定された CSS セレクターに一致するノードが見つかるまで探索
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button")
    .addEventListener("click", onClickAdd);