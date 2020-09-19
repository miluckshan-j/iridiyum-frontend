import React from 'react';

function PostForm() {
  return (
    <div class="card">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="post">What do you want to share now?</label>
            <textarea class="form-control" id="post" rows="3" maxlength="250"></textarea>
          </div>
          <span class="text-muted">0/250 Characters</span>
          <button type="submit" class="btn btn-purple px-4">Post</button>
        </form>
      </div>
    </div>
  );

}

export default PostForm;
