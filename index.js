window.onload = function setTemplate() {
        document.getElementById('allComments').innerHTML = localStorage.getItem('template');
      
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
    const commentText = document.getElementById('comment').value;
    commentText ==='' ? alert("should not post empty comment !!!!") : addComment(ev);
  
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    textBox.className='textBox'
    // const commentFeature = document.createElement('div');
    // commentFeature.className='commentFeature'
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = '0';
    likeButton.className = 'likeComment';
    const likePara = document.createElement('span');
    likePara.innerHTML = 'likes';
    likePara.className = 'likepara';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    if(hasClass(ev.target.parentElement,'btnPost')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        //commentFeature.append( replyButton, likeButton,likePara, deleteButton)
        //wrapDiv.append(textBox,commentFeature);
        wrapDiv.append(textBox, replyButton, likeButton,likePara, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        wrapDiv.innerHTML = '';
        // commentFeature.append( replyButton, likeButton,likePara, deleteButton)
        // wrapDiv.append(textBox,commentFeature);
        wrapDiv.append(textBox, replyButton, likeButton,likePara, deleteButton);
    }
    setOnLocalStorage();      
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) +2).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '0px';
        textArea.className='ReplyTextArea'
        textArea.placeholder='Reply Comments.....'
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Confirm';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== ''? Number.parseInt(likeBtnValue) + 1 : 1 ;
        setOnLocalStorage();
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
        setOnLocalStorage();
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
        var delet = localStorage.setItem('template', document.getElementById('allComments').innerHTML);
        delet='';
    }
});

function ColorChange(){
var likeBtn=document.getElementById("LikesButton");
var value = 0;
    if(likeBtn.style.fill=="red"){
        likeBtn.style.fill="#262626";
    }
    else{
        likeBtn.style.fill="red";
        e.target.innerHTML = likeBtnValue !== '0'? Number.parseInt(likeBtnValue) + 1 : 1 ;
        document.getElementById("Likes").innerHTML= value + "likes";
    }
}
