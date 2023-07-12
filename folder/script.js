const nameInput = document.getElementById("name");
const actionSelect = document.getElementById("action");
const ukgAccordion = document.getElementById("ukg-accordion");
const budgetPanel = document.getElementById("budget_panel");
const preferred_availability = document.getElementById("preferred_availability");
const employee_pref_weight = document.getElementById("employee_pref_weight");
const employee_preferred_job = document.getElementById("employee_preferred_job");
const preferred_hours_per_week = document.getElementById("preferred_hours_per_week");
const preferred_day_off = document.getElementById("preferred_day_off");
const most_hours_per_week = document.getElementById("most_hours_per_week");
const earliest_shift = document.getElementById("earliest_shift");
const longest_shift = document.getElementById("longest_shift");
const custom_field_employee_priority = document.getElementById("custom_field_employee_priority");
const low_job_priority = document.getElementById("low_job_priority_li");
const high_job_priority = document.getElementById("high_job_priority_li");
const budget_type = document.getElementById("budget_type");
const budget_limit_per_week = document.getElementById("budget_limit_per_week_li");
const budget_limit_currency = document.getElementById("budget_limit_currency_li");
const budget_tolerance_percentage = document.getElementById("budget_tolerance_percentage_li");
const weekly_budget_weight = document.getElementById("weekly_budget_weight_li");
const shift_template_li = document.getElementById("shift_template_li");
const multi_job_shifts_li = document.getElementById("multi_job_shifts_li");
const primary_job_only_li = document.getElementById("primary_job_only_li");
const min_job_segment_length_li = document.getElementById("min_job_segment_length_li");
const equalization_type_li = document.getElementById("equalization_type_li");
const worker_type_hour_equalization_weight_li = document.getElementById("worker_type_hour_equalization_weight_li");
const shift_profile_sets_li = document.getElementById("shift_profile_sets_li");
const employee_panel = document.getElementById("employee_panel");
const allow_multi_job_shifts_li = document.getElementById("allow_multi_job_shifts_li");
const assign_shifts_to_primary_job_only_li = document.getElementById("assign_shifts_to_primary_job_only_li");
const deleteCheckbox = document.getElementById("delete_checkbox");
const skillAndCertification = document.getElementById("skill_and_certification_slider");

actionSelect.addEventListener("change", function () {
  if (actionSelect.value === "Delete") {
    deleteCheckbox.style.display = "block";
  } else if (actionSelect.value === "") {
    deleteCheckbox.style.display = "none";
  }
  else {
    deleteCheckbox.style.display = "none";
  }
});

actionSelect.addEventListener("change", function () {
  if (actionSelect.value === "") {
    ukgAccordion.style.display = "none";
  } else if (actionSelect.value === "Generate Open Shifts Only") {
    ukgAccordion.style.display = "block";
    employee_panel.style.display = "none";
    allow_multi_job_shifts_li.style.display = "none";
    assign_shifts_to_primary_job_only_li.style.display = "none";
    min_job_segment_length_li.style.display = "none";
    budgetPanel.style.display = "block";
    shift_template_li.style.display = "block";
    shift_profile_sets_li.style.display = "block";
    preferred_availability.style.display = "block";
    preferred_hours_per_week.style.display = "block";
    preferred_day_off.style.display = "block";
    most_hours_per_week.style.display = "block";
    earliest_shift.style.display = "block";
    longest_shift.style.display = "block";
    equalization_type_li.style.display = "block";
    worker_type_hour_equalization_weight_li.style.display = "block";
    skillAndCertification.style.display = "none";
    toggleAdvancedParametersById("advancedParameters");
  } else if (actionSelect.value === "Assign Open Shifts Only") {
    ukgAccordion.style.display = "block";
    budgetPanel.style.display = "block";
    shift_template_li.style.display = "block";
    shift_profile_sets_li.style.display = "block";
    preferred_availability.style.display = "block";
    preferred_hours_per_week.style.display = "block";
    preferred_day_off.style.display = "block";
    most_hours_per_week.style.display = "block";
    earliest_shift.style.display = "block";
    longest_shift.style.display = "block";
    equalization_type_li.style.display = "block";
    worker_type_hour_equalization_weight_li.style.display = "block";
    employee_panel.style.display = "block";
    allow_multi_job_shifts_li.style.display = "block";
    assign_shifts_to_primary_job_only_li.style.display = "block";
    min_job_segment_length_li.style.display = "block";
    skillAndCertification.style.display = "none";
    toggleAdvancedParametersById("advancedParameters");
  } else if (actionSelect.value === "Generate and Assign Shifts") {
    ukgAccordion.style.display = "block";
    budgetPanel.style.display = "block";
    shift_template_li.style.display = "block";
    shift_profile_sets_li.style.display = "block";
    preferred_availability.style.display = "block";
    preferred_hours_per_week.style.display = "block";
    preferred_day_off.style.display = "block";
    most_hours_per_week.style.display = "block";
    earliest_shift.style.display = "block";
    longest_shift.style.display = "block";
    equalization_type_li.style.display = "block";
    worker_type_hour_equalization_weight_li.style.display = "block";
    employee_panel.style.display = "block";
    allow_multi_job_shifts_li.style.display = "block";
    assign_shifts_to_primary_job_only_li.style.display = "block";
    min_job_segment_length_li.style.display = "block";
    skillAndCertification.style.display = "none";
    toggleAdvancedParametersById("advancedParameters");
  } else if (actionSelect.value === "Optimize Shift Contents") {
    ukgAccordion.style.display = "block";
    budgetPanel.style.display = "none";
    shift_template_li.style.display = "none";
    shift_profile_sets_li.style.display = "none";
    preferred_availability.style.display = "none";
    preferred_hours_per_week.style.display = "none";
    preferred_day_off.style.display = "none";
    most_hours_per_week.style.display = "none";
    earliest_shift.style.display = "none";
    longest_shift.style.display = "none";
    equalization_type_li.style.display = "none";
    worker_type_hour_equalization_weight_li.style.display = "none";
    employee_panel.style.display = "block";
    allow_multi_job_shifts_li.style.display = "block";
    assign_shifts_to_primary_job_only_li.style.display = "block";
    min_job_segment_length_li.style.display = "block";
    skillAndCertification.style.display = "none";
    toggleAdvancedParametersById("advancedParameters");
  } else if (actionSelect.value === "Generate Employee Shifts Only") {
    ukgAccordion.style.display = "block";
    budgetPanel.style.display = "block";
    shift_template_li.style.display = "block";
    shift_profile_sets_li.style.display = "block";
    preferred_availability.style.display = "block";
    preferred_hours_per_week.style.display = "block";
    preferred_day_off.style.display = "block";
    most_hours_per_week.style.display = "block";
    earliest_shift.style.display = "block";
    longest_shift.style.display = "block";
    equalization_type_li.style.display = "block";
    worker_type_hour_equalization_weight_li.style.display = "block";
    employee_panel.style.display = "block";
    allow_multi_job_shifts_li.style.display = "block";
    assign_shifts_to_primary_job_only_li.style.display = "block";
    min_job_segment_length_li.style.display = "block";
    skillAndCertification.style.display = "none";
    toggleAdvancedParametersById("advancedParameters");
  } else if (actionSelect.value === "Delete") {
    ukgAccordion.style.display = "none";
    budgetPanel.style.display = "block";
    shift_template_li.style.display = "block";
    shift_profile_sets_li.style.display = "block";
    preferred_availability.style.display = "block";
    preferred_hours_per_week.style.display = "block";
    preferred_day_off.style.display = "block";
    most_hours_per_week.style.display = "block";
    earliest_shift.style.display = "block";
    longest_shift.style.display = "block";
    equalization_type_li.style.display = "block";
    worker_type_hour_equalization_weight_li.style.display = "block";
    employee_panel.style.display = "block";
    allow_multi_job_shifts_li.style.display = "block";
    assign_shifts_to_primary_job_only_li.style.display = "block";
    min_job_segment_length_li.style.display = "block";
    skillAndCertification.style.display = "none";v
    toggleAdvancedParametersById("advancedParameters");
  } else if (actionSelect.value === "Advanced") {
    ukgAccordion.style.display = "block";
    budgetPanel.style.display = "block";
    shift_template_li.style.display = "block";
    shift_profile_sets_li.style.display = "block";
    preferred_availability.style.display = "block";
    preferred_hours_per_week.style.display = "block";
    preferred_day_off.style.display = "block";
    most_hours_per_week.style.display = "block";
    earliest_shift.style.display = "block";
    longest_shift.style.display = "block";
    equalization_type_li.style.display = "block";
    worker_type_hour_equalization_weight_li.style.display = "block";
    employee_panel.style.display = "block";
    allow_multi_job_shifts_li.style.display = "block";
    assign_shifts_to_primary_job_only_li.style.display = "block";
    min_job_segment_length_li.style.display = "block";
    skillAndCertificationSlider.style.display = "none";
    skillAndCertification.style.display = "block";
    toggleAdvancedParameters(true);
  }
});

const employeePrefWeightSlider = document.getElementById("employee_pref_weight_slider");
const employeePrefWeightValue = document.getElementById("employee_pref_weight_value");
employeePrefWeightSlider.addEventListener("input", function () {
  employeePrefWeightValue.textContent = employeePrefWeightSlider.value;
});

const preferredAvailabilitySlider = document.getElementById("preferred_availability_slider");
const preferredAvailabilityValue = document.getElementById("preferred_availability_value");
preferredAvailabilitySlider.addEventListener("input", function () {
  preferredAvailabilityValue.textContent = preferredAvailabilitySlider.value + "%";
});

const employeePreferredJobSlider = document.getElementById("employee_preferred_job_slider");
const employeePreferredJobValue = document.getElementById("employee_preferred_job_value");
employeePreferredJobSlider.addEventListener("input", function () {
  employeePreferredJobValue.textContent = employeePreferredJobSlider.value + "%";
});

const preferredHoursPerWeekSlider = document.getElementById("preferred_hours_per_week_slider");
const preferredHoursPerWeekValue = document.getElementById("preferred_hours_per_week_value");
preferredHoursPerWeekSlider.addEventListener("input", function () {
  preferredHoursPerWeekValue.textContent = preferredHoursPerWeekSlider.value + "%";
});

const preferredDayOffSlider = document.getElementById("preferred_day_off_slider");
const preferredDayOffValue = document.getElementById("preferred_day_off_value");
preferredDayOffSlider.addEventListener("input", function () {
  preferredDayOffValue.textContent = preferredDayOffSlider.value + "%";
});

const mostHoursPerWeekSlider = document.getElementById("most_hours_per_week_slider");
const mostHoursPerWeekValue = document.getElementById("most_hours_per_week_value");
mostHoursPerWeekSlider.addEventListener("input", function () {
  mostHoursPerWeekValue.textContent = mostHoursPerWeekSlider.value + "%";
});

const earliestShiftSlider = document.getElementById("earliest_shift_slider");
const earliestShiftValue = document.getElementById("earliest_shift_value");
earliestShiftSlider.addEventListener("input", function () {
  earliestShiftValue.textContent = earliestShiftSlider.value + "%";
});

const longestShiftSlider = document.getElementById("longest_shift_slider");
const longestShiftValue = document.getElementById("longest_shift_value");
longestShiftSlider.addEventListener("input", function () {
  longestShiftValue.textContent = longestShiftSlider.value + "%";
});

const overcoverageSlider = document.getElementById("overcoverage_slider");
const overcoverageValue = document.getElementById("overcoverage_value");
overcoverageSlider.addEventListener("input", function () {
  overcoverageValue.textContent = overcoverageSlider.value + "%";
});

const undercoverageSlider = document.getElementById("undercoverage_slider");
const undercoverageValue = document.getElementById("undercoverage_value");
undercoverageSlider.addEventListener("input", function () {
  undercoverageValue.textContent = undercoverageSlider.value + "%";
});

const zeroCoverageSlider = document.getElementById("zero_coverage_slider");
const zeroCoverageValue = document.getElementById("zero_coverage_value");
zeroCoverageSlider.addEventListener("input", function () {
  zeroCoverageValue.textContent = zeroCoverageSlider.value + "%";
});

const budgetToleranceSlider = document.getElementById("budget_tolerance_percentage_slider");
const budgetToleranceValue = document.getElementById("budget_tolerance_percentage_value");
budgetToleranceSlider.addEventListener("input", function () {
  budgetToleranceValue.textContent = budgetToleranceSlider.value + "%";
});

const weeklyBudgetSlider = document.getElementById("weekly_budget_weight_slider");
const weeklyBudgetValue = document.getElementById("weekly_budget_weight_value");
weeklyBudgetSlider.addEventListener("input", function () {
  weeklyBudgetValue.textContent = weeklyBudgetSlider.value;
});

const skillAndCertificationSlider = document.getElementById("skill_and_certification_slider");
const skillAndCertificationValue = document.getElementById("skill_and_certification_value");
skillAndCertificationSlider.addEventListener("input", function () {
  skillAndCertificationValue.textContent = skillAndCertificationSlider.value;
});



const workerTypeContainer = document.getElementById("selected_order");
const selectedWorkerTypes = [];

function updateSelectedOrder() {
  const checkboxes = document.querySelectorAll('input[name="worker_type[]"]');

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked && !selectedWorkerTypes.includes(checkbox.value)) {
      selectedWorkerTypes.push(checkbox.value);
    } else if (!checkbox.checked && selectedWorkerTypes.includes(checkbox.value)) {
      const index = selectedWorkerTypes.indexOf(checkbox.value);
      selectedWorkerTypes.splice(index, 1);
    }
  });

  let order = "";
  selectedWorkerTypes.forEach((workerType, index) => {
    order += `${index + 1}. ${workerType}<br>`;
  });
  workerTypeContainer.innerHTML = order;
}

document.querySelectorAll('input[name="worker_type[]"]').forEach((checkbox) => {
  checkbox.addEventListener("change", updateSelectedOrder);
});

function toggleIframe() {
  var iframeContainer = document.getElementById('iframeContainer');
  iframeContainer.style.display = (iframeContainer.style.display === 'none') ? 'block' : 'none';
}

function toggleAdvancedParameters(show) {
  var elements = document.querySelectorAll(".advanced_parameters");
  elements.forEach(function(element) {
    element.style.display = "none";
  });
}

function toggleAdvancedParametersById(id) {
  var element = document.getElementById(id);
  if (element) {
    element.style.display = "none";
  }
}

