# Zen Tasks Base Context

This file provides the foundational definitions and conventions for zen-tasks, supporting the workflow context and all task management operations.

## Task Structure
- **ID**: Unique identifier
- **Title**: Short, descriptive name
- **Description**: Detailed explanation of the task
- **Priority**: high, medium, low
- **Dependencies**: Array of task IDs
- **Status**: pending, in-progress, done, blocked, review, deferred, cancelled
- **Test Strategy**: How to verify completion

## Best Practices
- Keep tasks atomic and focused
- Use dependencies to express order and requirements
- Update status as work progresses
- Review and refine tasks regularly

---

See zen_tasks_workflow.md for workflow details.
