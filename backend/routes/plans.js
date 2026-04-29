const express = require('express');
const Plan = require('../models/Plan');

const router = express.Router();

// GET all plans
router.get('/', async (req, res) => {
  try {
    const plans = await Plan.find()
      .sort({ createdAt: -1 })
      .select('subject daysLeft hoursPerDay createdAt');
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
});

// GET single plan by ID
router.get('/:id', async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) return res.status(404).json({ error: 'Plan not found' });
    res.json({ id: plan._id, ...plan.planData });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plan' });
  }
});

// DELETE a plan
router.delete('/:id', async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete plan' });
  }
});

module.exports = router;